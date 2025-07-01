<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Produit;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\ProduitResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\ProduitResource\RelationManagers;

class ProduitResource extends Resource
{
    protected static ?string $model = Produit::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('nom_produit')->required(),

                FileUpload::make('image')
                    ->image()
                    ->disk('public') // utilise le disque "public" de Laravel
                     ->directory('produits') // => storage/app/public/produits
                    ->required(fn ($livewire) => $livewire instanceof Pages\CreateProduit),

                TextInput::make('prix')->numeric()->required(),

                Textarea::make('description')->rows(3),

                Select::make('categorie_id')
                    ->label('Catégorie')
                    ->relationship('categorieProduit', 'nom_categorie')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('nom_produit')
                    ->label('Nom du produit')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\ImageColumn::make('image')
                    ->label('Image')
                    ->disk('public') 
                    ->width(60)
                    ->height(60)
                    ->circular(),

                Tables\Columns\TextColumn::make('prix')
                    ->label('Prix')
                    ->sortable(),

                Tables\Columns\TextColumn::make('categorieProduit.nom_categorie')
                    ->label('Catégorie')
                    ->sortable(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProduits::route('/'),
            'create' => Pages\CreateProduit::route('/create'),
            'edit' => Pages\EditProduit::route('/{record}/edit'),
        ];
    }
}
