<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CategorieResource\Pages;
use App\Filament\Resources\CategorieResource\RelationManagers;
use App\Models\Categorie;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CategorieResource extends Resource
{
    protected static ?string $model = Categorie::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                 Forms\Components\TextInput::make('nom_categorie')
                ->label('Nom de la catégorie')
                ->required()
                ->maxLength(255),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('nom_categorie')
               ->label('Nom de la catégorie')
               ->searchable()
               ->sortable(),
            ])
            ->filters([
                //
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
            'index' => Pages\ListCategories::route('/'),
            'create' => Pages\CreateCategorie::route('/create'),
            'edit' => Pages\EditCategorie::route('/{record}/edit'),
        ];
    }

    //  public static function canCreate(): bool
    // {
    //     return auth()->user()?->hasRole('super_admin');
    // }

    // public static function canEdit($record): bool
    // {
    //     return auth()->user()?->hasRole('super_admin');
    // }

    // public static function canDelete($record): bool
    // {
    //     return auth()->user()?->hasRole('super_admin');
    // }

    // public static function shouldRegisterNavigation(): bool
    // {
    //     return auth()->user()?->hasRole('super_admin');
    // }
}
